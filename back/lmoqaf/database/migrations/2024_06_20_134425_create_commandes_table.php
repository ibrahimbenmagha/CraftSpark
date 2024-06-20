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
            $table->foreignId('client_id')->references('id')->on('clients');
        
        $table->foreignId('artisan_id')->references('id')->on('artisans');
        
        $table->foreignId('artisan_service_id')->references('id')->on('artisans_service_id');
        
        references("id")->on("artisan");
         
            $table->timestamp('service_date');
            $table->float('total_price');
            $table->enum('status',['pending', 'in progress', 'completed']);
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
