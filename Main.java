import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.CvType;
import org.opencv.core.Scalar;

public class Main
{
  public static void main(String[] args)
  {
    System.load(Core.NATIVE_LIBRARY_NAME);
    Mat mat = new Mat();
    System.out.println( "mat = " + mat.dump() );
  }
}
