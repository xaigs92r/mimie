public class Main
{
    public static void main(final java.lang.String args[])
    {
        final var server = java.nio.channels.AsynchronousServerSocketChannel.open().bind(new java.net.InetSocketAddress(80));
        server.accept(null, new java.nio.channels.CompletionHandler<java.nio.channels.AsynchronousSocketChannel, void>()
                      {
                          public void completed(final java.nio.channels.AsynchronousSocketChannel channel, void)
                          {
                              server.accept(null, this);
                              channel.write(java.nio.ByteBuffer.wrap("haha".getBytes()));
                          }
                      });
    }
}
