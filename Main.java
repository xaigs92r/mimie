public class Main
{
    public static void main(final java.lang.String[] args)
    {
        java.lang.System.loadLibrary(org.opencv.core.Core.NATIVE_LIBRARY_NAME);
        try (final var playwright = com.microsoft.playwright.Playwright.create())
        {
            try (final var browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setArgs(java.util.List.of("")).setHeadless(false)))
            {
                final var context = browser.newContext();
                final var page = context.newPage();
                page.navigate("http://whatsmyuseragent.org/");
                page.screenshot(new com.microsoft.playwright.Page.ScreenshotOptions().setPath(java.nio.file.Paths.get("haha.jpg")));
            }
        }
        final var mat = org.opencv.core.Mat.eye( 3, 3, org.opencv.core.CvType.CV_8UC1 );
        java.lang.System.out.println(mat.dump());
    }
}
