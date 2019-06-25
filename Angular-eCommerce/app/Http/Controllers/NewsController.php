<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Carbon\Carbon;

class NewsController extends Controller
{


    public function index()
    {
        return News::get();
    }

    
    public function create(Request $request)
    {
        $news = new News();
        $news->title=$request->title;
        $news->content=$request->content;
        $news->date_created=date('Y-m-d H:i:s');
        $news->image="news1.jpg";
        $news->creator= 1;
        $news->save();

        // $news=date('Y-m-d H:i:s');
        // $news = Carbon::now()->toDateTimeString();

        return $news;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if ($id != null) {
            $news = News::find($id);
            return response()->json($news);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $news = News::find($request->id_news);
        $news->title=$request->title;
        $news->content=$request->content;
        $news->date_created=date('Y-m-d H:i:s');
        $news->image="news1.jpg";
        $news->creator= 1;
        $news->save();
        return $news;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id_news);
        $news->delete();    

        // $new= News::all();
        // $response=[
        //     'message' => "success",
        //     'data1'=>$new
        // ];
        // return $news;
    }
}
