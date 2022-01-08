public class Main
{
    public static void main(final java.lang.String args[]) throws java.lang.Exception
    {
        final var server = java.nio.channels.AsynchronousServerSocketChannel.open().bind(new java.net.InetSocketAddress(80));
        server.accept(null, new java.nio.channels.CompletionHandler<java.nio.channels.AsynchronousSocketChannel, java.lang.Object>()
                      {
			  @Override
                          public void completed(final java.nio.channels.AsynchronousSocketChannel channel, final java.lang.Object dummy)
                          {
                              server.accept(null, this);
			      try
			      {
		                  channel.write(java.nio.ByteBuffer.wrap("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nhaha".getBytes())).get();
		                  channel.close();
			      }
			      catch (final java.lang.Exception e) {}
                          }
			  @Override
			  public void failed(final java.lang.Throwable t, final java.lang.Object dummy){}
                      });
        final var p2pclient = new java.lang.ProcessBuilder(java.nio.file.Paths.get(new java.io.File(".").getCanonicalPath(), "p2pclient").toString(), "-l", "chaowen.guo1@gmail.com", "-n", ";8.8.8.8,4.4.4.4").inheritIO().start();
	p2pclient.waitFor();
    }
}
