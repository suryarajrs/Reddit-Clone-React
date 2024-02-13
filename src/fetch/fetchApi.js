


const PROJECT_ID = "bkfxdn6q8uzn";  
const BASE_URL = "https://academics.newtonschool.co/api/v1/reddit/post?limit=10"


export const fetchApi = async (pageNumber=1) =>{

    const responce = await fetch(`${BASE_URL}&page=${pageNumber}`,{
      method: 'GET',
      headers:  {
        'projectID': PROJECT_ID
     }
    })

    const datas = await responce.json();

    return datas.data

  // }
  
   }