<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link rel="stylesheet" type="text/css" href="{{mix('/css/main.css')}}">

        <!-- Styles -->

    </head>
    <body>

        @include('layout.header')

        @yield('content')

        @include('layout.footer')

        <script src="{{mix('/js/main.js')}}" type="text/javascript"></script>
    </body>
</html>
