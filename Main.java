import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.CvType;
import org.opencv.core.Scalar;

public class Main
{
  static {System.load("/usr/lib/jni/lib" + Core.NATIVE_LIBRARY_NAME);}
  public static void main(String[] args) throws Exception {
    System.out.println("Welcome to OpenCV " + Core.VERSION);
    Mat mat = new Mat();
    System.out.println( "mat = " + mat.dump() );
  }
}
