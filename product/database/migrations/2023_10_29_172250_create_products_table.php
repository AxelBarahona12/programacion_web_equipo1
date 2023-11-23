<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('units', function (Blueprint $table) {
            $table->id();
            $table->string('unit_name');
            $table->string('unit_type');
            $table->string('unit_status');
            $table->string('unit_roomnumber');
            $table->date('unit_added_date');
            $table->json('unit_pictures'); // Asumiendo que deseas almacenar las URL de las imágenes en un array JSON.
            $table->timestamps();
            $table->foreign('building_id')->references('id')->on('buildings');
            $table->foreign('floor_id')->references('id')->on('floors');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('units');
    }
}
