## Project Name

This project demonstrates how to use the aws-sdk to upload files to R2 using NextJS and a few different environment variables. You can check out the [accompanying article](https://www.ivanleo.com/blog/uploading_files_in_nextjs_to_r2_with_server_actions) here that walks you through the code

## Prerequisites

Before running this project, make sure you have the following:

- Node.js installed
- R2 account credentials

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Install the dependencies:

   ```bash
   cd your-project
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory of the project and add the following variables:

   ```plaintext
   R2_ACCOUNT_ID=your-r2-account-id
   R2_UPLOAD_KEY=your-r2-upload-key
   R2_UPLOAD_SECRET=your-r2-upload-secret
   R2_UPLOAD_BUCKET=your-r2-upload-bucket
   R2_UPLOAD_REGION=your-r2-upload-region
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

To upload a file, follow these steps:

1. Choose a file to upload by clicking the "Choose File" button.
2. Click the "Upload" button to initiate the upload process.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```typescript
## Uploading Files to R2

To upload a file to R2, you can use the `uploadFile` function from the `@/lib/r2` module. Here's an example of how to use it:
