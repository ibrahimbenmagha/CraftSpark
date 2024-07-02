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
        Schema::create('commandes', function (Blueprint $table) {
            $table->id();
            $table->date('service_date');
            $table->float('total_price');
            $table->enum('status',['pending', 'in progress', 'completed']);

            $table->foreignId('client_id')->references('id')->on('clients');
            $table->foreignId('artisan_id')->references('id')->on('artisans');
            $table->foreignId('artisan_service_id')->references('id')->on('service_artisan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
