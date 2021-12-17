public class Main
{
    public static void main(final java.lang.String[] args)
    {
        java.lang.System.loadLibrary(org.opencv.core.Core.NATIVE_LIBRARY_NAME);
        try (final var playwright = com.microsoft.playwright.Playwright.create())
        {
            try (final var browser = playwright.chromium().launch(new com.microsoft.playwright.BrowserType.LaunchOptions().setChannel("chrome").setArgs(java.util.List.of("--disable-blink-features=AutomationControlled")).setHeadless(false)))
            {
                final var context = browser.newContext();
                final var page = context.newPage();
                page.navigate("https://www.star-clicks.com/login");
                page.fill("input#Email", "chaowen.guo1@gmail.com");
                page.fill("input#Password", args[0]);
                final var client = java.net.http.HttpClient.newBuilder().build();
                page.screenshot(new com.microsoft.playwright.Page.ScreenshotOptions().setPath(java.nio.file.Paths.get("haha.jpg")));
            }
        }
        final var mat = org.opencv.core.Mat.eye( 3, 3, org.opencv.core.CvType.CV_8UC1 );
        java.lang.System.out.println(mat.dump());
    }
}
