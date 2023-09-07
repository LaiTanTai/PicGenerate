import React,{useState} from 'react';
import styles from './Generate.module.scss';
import deepai from 'deepai';
import { useSelector,useDispatch } from 'react-redux';
import { UpdateImage } from '../../api/ImageAPI';
import WhiteLoader from '../../components/WhiteLoader/WhiteLoader';
deepai.setApiKey('48c41f66-7919-4da0-a9b6-9f4f2da1cf15')
function Generate() {
  const [isLoading,setIsLoading] = useState(false)
  const clientId = '9f576559c174673'
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.User)
  const [textImage,setTextImage] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const handleChange = (event)=>{
    setTextImage(event.target.value)
    console.log(textImage)
  }
  const generateImage = async () => {
    setIsLoading(true)
    try {
        const response = await deepai.callStandardApi("text2img",{
            text:textImage
        })
        setImageUrl(response.output_url); // Thay URL_hinh_anh bằng URL của hình ảnh bạn muốn tải về
        setIsLoading(false)
    } catch (error) {
        console.log('lỗi',error)
    }
  };
  return (
    <div className={styles.Generate}>
      <div className={styles.Generate_left}>
        <div className={styles.Generate_left_div}>
          <span className={styles.Generate_left_title}>
            Generate <img src="./img/image.svg" style={{ marginLeft: '15px' }} />
            <span style={{ color: '#257ef2' }}>Image</span>
          </span>
          <div className={styles.Generate_left_textOutside}>
            <div style={{ padding: '5px 7px 5px 7px' }}>
              <p style={{ fontWeight: '600', fontSize: '15px' }}>
                Describe your creation in detail
              </p>
              <textarea
                style={{
                  border: 'none',
                  outline: 'none', // Loại bỏ border mặc định
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Tạo border mờ
                  padding: '10px',
                  resize: 'none',
                  width:'95%', // Thêm padding cho phần nội dung
                }}
                placeholder="A white bird flying over a volcano"
                onChange={handleChange}
                rows={8}
              // Số hàng của textarea
                 // Số cột của textarea
              />
              {isLoading ? <WhiteLoader/>:<button className={styles.Generate_left_buttongen} disabled={textImage ? false : true} onClick={generateImage}><img src='./img/star.svg' alt='star'/>GENERATE</button>}
            </div>
          </div>
        </div>
      </div>
      {
        imageUrl ? <div className={styles.Generate_right}>
          <img src={imageUrl} className={styles.Generate_rightHaveimage}/>
      </div> : 
      <div className={styles.Generate_right}>
          <img className={styles.Generate_right_image} src='https://gencraft.com/_next/static/images/board-21302831fa58c543eac93a1062579b90.svg' alt='net'/>
          <div className={styles.Generate_right_image_octopus}>
            <img style={{width:'120px'}} src='./img/octopus.svg' alt='octopus'/>
            <p>Your creations will appear here</p>
          </div>
      </div>
      }
    </div>
  );
}

export default Generate;