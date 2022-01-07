import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.*;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class NioServer
{
    //保存客户端连接
    static List<SocketChannel> channelList = new ArrayList<>();

    public static void main(String[] args) throws Exception {

        // 创建 NIO ServerSocketChannel，与 BIO ServerSocket 类似
        ServerSocketChannel serverSocket = ServerSocketChannel.open();
        serverSocket.socket().bind(new InetSocketAddress(9000));
        // 设置 ServerSocketChannel 为非阻塞
        serverSocket.configureBlocking(false);
        // 打开Selector处理Channel，即创建epoll
        Selector selector = Selector.open();
        // 把 ServerSocketChannel 注册到 selector 上，并且 让selector监听 客户端accept 事件
        SelectionKey selectionKey = serverSocket.register(selector, SelectionKey.OP_ACCEPT);
        System.out.println("服务启动成功");

        while (true) {
            // 阻塞等待需要处理的事件发生
            selector.select();

            // 获取selector中注册的全部事件 的 SelectionKey 实例
            Set<SelectionKey> selectionKeys = selector.selectedKeys();
            Iterator<SelectionKey> skIterator = selectionKeys.iterator();

            while (skIterator.hasNext()){
                SelectionKey key = skIterator.next();
                // 如果是 OP_ACCEPT 事件，则进行连接获取和时间注册
                if (key.isAcceptable()){
                    ServerSocketChannel server = (ServerSocketChannel) key.channel();
                    SocketChannel socketChannel = server.accept();
                    socketChannel.configureBlocking(false);
                    SelectionKey selKey = socketChannel.register(selector, SelectionKey.OP_READ);
                    System.out.println("客户端连接成功");
                }else if (key.isReadable()){ // 如果是 OP_READ 事件 ，则进行读写和打印
                    SocketChannel socketChannel = (SocketChannel) key.channel();
                    ByteBuffer byteBuffer = ByteBuffer.allocate(128);
                    int len = socketChannel.read(byteBuffer);
                    // 如果有数据，把数据打印出来
                    if (len > 0){
                        System.out.println("接收到消息：" + new String(byteBuffer.array(),0,len));
                    }else if (len == -1){
                        System.out.println("客户端断开连接");
                    }
                }
                // 从事件集合里删除本次处理的key，防止下次select重复处理
                skIterator.remove();
            }
        }
    }
}
