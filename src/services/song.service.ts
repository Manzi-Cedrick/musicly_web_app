import { http } from "../utils/https/http-common";

class SongService {
    createSong(data:any){
        return http.post(`/song/new`,data)
    }
    updateSong(id:string,data:any){
        return http.put(`/song/update/${id}`,data)
    }
    displaySongs(){
        return http.get(`/song/all`);
    }
    singleSong(id:string){
        return http.get(`/song/detail/${id}`)
    }
    deleteSong(id:string){
        return http.delete(`/song/delete/${id}`)
    }
}
const songService = new SongService();
export default songService;