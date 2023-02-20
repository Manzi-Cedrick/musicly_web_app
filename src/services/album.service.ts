import { http } from "../utils/https/http-common";

class AlbumService {
    createAlbum(data: any) {
        return http.post('/albums', data)
    }
    updateAlbum(id: string, data: any) {
        return http.put(`/album/${id}`, data)
    }
    deleteAlbum(id: string) {
        return http.delete(`/album/${id}`)
    }
    showAlbum(){
        return http.get('/albums')
    }
    singleAlbum(id:string) {
        return http.get(`/album/${id}`)
    }
}
const albumService = new AlbumService();
export default albumService;