public class Server
{
    public static void main(final java.lang.String args[]) throws java.lang.Exception
    {
        //final var p2pclient = new java.lang.ProcessBuilder(java.nio.file.Paths.get(new java.io.File(".").getCanonicalPath(), "p2pclient").toString(), "-l", "chaowen.guo1@gmail.com", "-n", ";8.8.8.8,4.4.4.4").inheritIO().start();
	final var vertx = io.vertx.core.Vertx.vertx();
        vertx.createHttpServer().requestHandler(request -> request.response().end("java")).listen(80);
    }
}
