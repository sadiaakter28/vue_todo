@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-4">
                <div class="card-header">{{ __('Vue Todo App') }}</div>

{{--                <div class="card-body">--}}
{{--                    @if (session('status'))--}}
{{--                        <div class="alert alert-success" role="alert">--}}
{{--                            {{ session('status') }}--}}
{{--                        </div>--}}
{{--                    @endif--}}

{{--                    {{ __('You are logged in!') }}--}}
{{--                </div>--}}
                <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
{{--                    <h1 class="display-4 mt-5">Vue Todo App</h1>--}}
                    <todo-component></todo-component>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
