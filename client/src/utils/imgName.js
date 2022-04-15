export function getImgName(imgUrl) {
    try {
        const url = new URL(imgUrl)
        const pathName = url.pathname.split('/')
        const imgName = pathName[pathName.length - 1]
        return imgName
    } catch (err) {
        if (imgUrl === '/placeholder.png') {
            return ''
        }
        return imgUrl
    }
}
