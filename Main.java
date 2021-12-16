public class Main
{
    public static void main(final java.lang.String[] args)
    {
        java.lang.System.loadLibrary(org.opencv.core.Core.NATIVE_LIBRARY_NAME);
        final var mat = org.opencv.core.Mat.eye( 3, 3, org.opencv.core.CvType.CV_8UC1 );
        java.lang.System.out.println(mat.dump());
    }
}
