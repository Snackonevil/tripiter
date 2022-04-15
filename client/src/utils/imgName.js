export function getImgName(imgUrl) {
    try {
        const url = new URL(imgUrl)
        console.log(url)
        const pathName = url.pathname.split('/')
        const imgName = pathName[pathName.length - 1]
        console.log(imgName)
        return imgName
    } catch (err) {
        if (imgUrl === '/placeholder.png') {
            return ''
        }
        return imgUrl
    }
}
