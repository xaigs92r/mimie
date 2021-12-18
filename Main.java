public class Main
{
    public static void main(final java.lang.String[] args) throws java.lang.Exception
    {
        java.lang.System.loadLibrary(org.opencv.core.Core.NATIVE_LIBRARY_NAME);
        try (final var playwright = com.microsoft.playwright.Playwright.create())
        {
            try (final var browser = playwright.chromium().launch(new com.microsoft.playwright.BrowserType.LaunchOptions().setChannel("chrome").setArgs(java.util.List.of("--disable-blink-features=AutomationControlled")).setHeadless(false)))
            {
                final var context = browser.newContext(new com.microsoft.playwright.Browser.NewContextOptions().setRecordVideoDir(java.nio.file.Paths.get("videos")));
                final var page = context.newPage();
                page.navigate("https://www.star-clicks.com/login");
                final var email = page.locator("input#Email");
                email.evaluateHandle("_ => _.removeAttribute('class')");
                email.fill("chaowen.guo1@gmail.com");
                page.fill("input#Password", args[0]);
                final var mat = org.opencv.imgcodecs.Imgcodecs.imdecode(new org.opencv.core.MatOfByte(java.net.http.HttpClient.newBuilder().build().sendAsync(java.net.http.HttpRequest.newBuilder(java.net.URI.create("https://www.star-clicks.com/" + page.locator("img#Captcha2_CaptchaImage").getAttribute("src"))).build(), java.net.http.HttpResponse.BodyHandlers.ofByteArray()).thenApply(java.net.http.HttpResponse::body).join()), org.opencv.imgcodecs.Imgcodecs.IMREAD_GRAYSCALE);
                //java.lang.System.out.println(mat.dump());
                /*final var set = new java.util.HashSet<java.lang.Integer>();
                for (final var row:mat)
                {
                    for (final var $:row) set.add($);
                }
                java.lang.System.out.println(set);*/
                org.opencv.imgproc.Imgproc.threshold(mat, mat, 0, 255, org.opencv.imgproc.Imgproc.THRESH_BINARY + org.opencv.imgproc.Imgproc.THRESH_OTSU);
                org.opencv.imgproc.Imgproc.morphologyEx(mat, mat, org.opencv.imgproc.Imgproc.MORPH_CLOSE, new org.opencv.core.Mat());
                //org.opencv.imgcodecs.Imgcodecs.imwrite("page.jpg", mat);
                final var tesseract = new net.sourceforge.tess4j.Tesseract();
                tesseract.setDatapath("/usr/share/tesseract-ocr/4.00/tessdata");
                final var matOfByte = new org.opencv.core.MatOfByte();
                org.opencv.imgcodecs.Imgcodecs.imencode(".jpg", mat, matOfByte);
                page.fill("input#Captcha2_CaptchaTextBox", tesseract.doOCR(javax.imageio.ImageIO.read(new java.io.ByteArrayInputStream(matOfByte.toArray()))).replaceAll("[^\\d]", ""));
                page.click("input#Button1_input");
                page.click("a[href='ads']");
                final var ads = page.locator("a[rel]");
                for (final var $:(java.lang.Iterable<java.lang.Integer>)java.util.stream.IntStream.range(0, ads.count())::iterator) ads.nth($).click();
                java.util.concurrent.TimeUnit.SECONDS.sleep(15);
                page.screenshot(new com.microsoft.playwright.Page.ScreenshotOptions().setPath(java.nio.file.Paths.get("haha.jpg")).setFullPage(true));
            }
        }
    }
}
