"use server"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { zact } from "zact/server";
import { z } from "zod";

const fileSchema = z.object({
  name: z.string(),
})

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_UPLOAD_KEY as string,
    secretAccessKey: process.env.R2_UPLOAD_SECRET as string,
  },
});

export const uploadFile = zact(
  fileSchema,
)(
  async (input) => {
    const preSignedUrl = await getSignedUrl(S3, new PutObjectCommand({ Bucket: process.env.R2_UPLOAD_BUCKET, Key: input.name }), {
      expiresIn: 3600
    })
    return {
      url: preSignedUrl,
    }
  }
)