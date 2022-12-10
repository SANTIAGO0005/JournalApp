// import { fileUpload } from "../../helpers/fileUpload"
// import { v2 as cloudinary } from 'cloudinary'

// cloudinary.config({
//     cloud_name: 'dcr0ax7ju',
//     api_key: '782997337516171',
//     api_secret: '0-RXt9Ut1p5LQWAdIs3m-kLe9vo',
//     secure: true
// })

describe('Pruebas en fileUpload', () => { 
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        // const imageUrl ='https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80'
        // const resp = await fetch(imageUrl)
        // const blob = await resp.blob()
        // const file = new File([blob], 'foto.jpg')
        // const url = await fileUpload(file)
        // expect( typeof url).toBe('string')


        // const segments = url.split('/')
        // const imageId = segments[ segments.length - 1].replace('.jpg','')

        // const cloudResp = await cloudinary.api.delete_resources(['journal/'+ imageId], {
        //     resource_type: 'image'
        // } )


    })

    test('debe de retornar null', async() => { 

        // const file = new File([], 'foto.jpg')
        // const url = await fileUpload(file)
        // expect(url).toBe( null)
     })
 })