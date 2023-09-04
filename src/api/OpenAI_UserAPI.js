import OpenAI from "openai"
const APIKey = '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'
const openai = new OpenAIApi(configuration);

export const createImageFromText = async () => {
  try {
    const response = await openai.Completion.create({
      engine: 'davinci',
      prompt: "a white siamese cat",
      max_tokens: 50,
    });

    const imageDescription = response.choices[0].text;
    console.log('Mô tả ảnh: ', imageDescription);

    // Ở đây bạn có thể sử dụng mô tả để tạo hoặc hiển thị hình ảnh.
    return imageDescription;
  } catch (error) {
    console.error('Lỗi OpenAI API: ', error);
    throw error;
  }
}