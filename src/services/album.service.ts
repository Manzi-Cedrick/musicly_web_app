import { http } from "../utils/https/http-common";

class AlbumService {
    createAlbum(data: any) {
        return http.post('/album/create', data)
    }
    updateAlbum(id: string, data: any) {
        return http.put(`/album/update/${id}`, data)
    }
    deleteAlbum(id: string) {
        return http.delete(`/album/delete/${id}`)
    }
    showAlbum(){
        return http.get('/album/all')
    }
    singleAlbum(id:string) {
        return http.get(`/album/get/${id}`)
    }
}
const albumService = new AlbumService();
export default albumService;