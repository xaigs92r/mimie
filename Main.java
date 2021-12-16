import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.CvType;
import org.opencv.core.Scalar;

public class Main
{
  static {System.loadLibrary(Core.NATIVE_LIBRARY_NAME);}
  public static void main(String[] args) {
    System.out.println("Welcome to OpenCV " + Core.VERSION);
    Mat mat = Mat.eye( 3, 3, CvType.CV_8UC1 );
    System.out.println( "mat = " + mat.dump() );
  }
}
