<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Carbon\Carbon;
use DB;
class NewsController extends Controller
{


    public function index()
    {
        $data = DB::table('news')
                    ->leftJoin('users', 'news.creator', '=', 'users.id_account')
                    ->select('id_news','title', 'content','news.image','date_created','creator','fullname',)
                    ->get();
        return response()->json([
            'news'=>$data
        ],200);
    }

    
    public function create(Request $request)
    {
        $news = new News();
        $news->title=$request->title;
        $news->content=$request->content;
        $news->date_created=date('Y-m-d H:i:s');
        $news->image=$request->image;
        $news->creator= $request->creator;
        $news->save();

        return response()->json([
            'message'=>'Created news success !'  
        ],200);
    }

    public function show($id)
    {
        $data = DB::table('news')
                    ->where('news.id_news',$id)
                    ->leftJoin('users', 'news.creator', '=', 'users.id_account')
                    ->select('id_news','title', 'content','news.image','date_created','creator','fullname',)
                    ->get();
        return response()->json([
            'news'=>$data
        ],200);
    }


    public function update(Request $request)
    {
        $news = News::find($request->id_news);
        $news->title=$request->title;
        $news->content=$request->content;
        $news->date_created=date('Y-m-d H:i:s');
        $news->image=$request->image;
        $news->save();
        
        return response()->json([
            'news'=>$news,
            'message'=>'News has been updated !'  
        ],200);
    }

  
    public function destroy(Request $request)
    {
        $news = News::find($request->id_news);
        $news->delete();    

        return response()->json([
            'message'=>'Deleted news success !'  
        ],200);
    }

    //client
    function getListNews(){
        $records=News::all();
        return response()->json($records);
    }
}
