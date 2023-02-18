import { http } from "../utils/https/http-common";

class GenreService {
    createGenre(data:any){
        return http.post(`/genre/new`,data)
    }
    updateGenre(id:string,data:any){
        return http.put(`/genre/update/${id}`,data)
    }
    displayGenre(){
        return http.get(`/genre/all`);
    }
    singleGenre(id:string){
        return http.get(`/genre/detail/${id}`)
    }
    deleteGenre(id:string){
        return http.delete(`/genre/delete/${id}`)
    }
}
const genreService = new GenreService();
export default genreService;