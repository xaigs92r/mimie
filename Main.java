public class Main
{
    public static void main(final java.lang.String[] args) throws java.lang.Exception
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
                //page.fill("input#Password", args[0]);
                final var mat = org.opencv.imgcodecs.Imgcodecs.imdecode(org.opencv.core.MatOfByte.fromArray(java.net.http.HttpClient.newBuilder().build().sendAsync(java.net.http.HttpRequest.newBuilder(java.net.URI.create("https://www.star-clicks.com/" + page.locator("img#Captcha2_CaptchaImage").getAttribute("src"))).build(), java.net.http.HttpResponse.BodyHandlers.ofByteArray()).thenApply(java.net.http.HttpResponse::body).join()), org.opencv.imgcodecs.Imgcodecs.CV_LOAD_IMAGE_GRAYSCALE);
                org.opencv.imgcodecs.Imgcodecs.imwrite("page.jpg", mat);
                page.screenshot(new com.microsoft.playwright.Page.ScreenshotOptions().setPath(java.nio.file.Paths.get("haha.jpg")));
            }
        }
    }
}
