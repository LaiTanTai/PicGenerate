const generateImage = async () => {
  try {
    // Gửi yêu cầu POST đến API của DeepAI
    const response = await axios.post('https://api.deepai.org/api/text2img', {
      text: text,
    }, {
      headers: {
        'api-key': '48c41f66-7919-4da0-a9b6-9f4f2da1cf15', // Thay YOUR_DEEPAI_API_KEY bằng API key của bạn
      },
    });

    // Lấy URL của hình ảnh được tạo từ phản hồi
    const { output_url } = response.data;
    setImageUrl(output_url);
  } catch (error) {
    console.error('Lỗi khi tạo hình ảnh: ', error);
  }
};