<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('service_artisan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('artisan_id')->references("id")->on("artisan");
            $table->foreignId('service_id')->references("id")->on("services");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_artisan');
    }
};
