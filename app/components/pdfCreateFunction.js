import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>پروژه برج مروارید</h1>
        <h2>سوالات</h2>
        <h3>ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)</h3>
        <h3>بله - بدون مانع میباشد - سوال یکککککک</h3>
        <br>
        <br>
        <br>
        <br>
        <h3>ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)</h3>
        <h3>بله - بدون مانع میباشد - سوال دوووووو</h3>
        <br>
        <br>
        <br>
    </body>
    </html>
`;

export const createAndSavePDF = async () => {
  const html = htmlContent;
  try {
    const { uri } = await Print.printToFileAsync({ html });
    console.log(uri);
    if (Platform.OS === "web") {
      await Sharing.shareAsync(uri);
    } else {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        const asset = await MediaLibrary.createAssetAsync(uri);
        asset.filename = "assetbinamoos";
        await MediaLibrary.createAlbumAsync("Download", asset, false);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
