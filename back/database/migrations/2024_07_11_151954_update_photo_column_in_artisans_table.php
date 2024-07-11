<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePhotoColumnInArtisansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('artisans', function (Blueprint $table) {
            $table->text('photo')->nullable()->change(); // Modifier la colonne photo pour être de type text
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('artisans', function (Blueprint $table) {
            $table->string('photo')->nullable()->change(); // Revenir à la colonne string
        });
    }
}
