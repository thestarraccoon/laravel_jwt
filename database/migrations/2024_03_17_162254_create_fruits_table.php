<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Faker\Factory as Faker;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $faker = Faker::create();
        $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));

        Schema::create('fruits', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedInteger('price');
            $table->timestamps();
        });

//        foreach (range(1,10) as $rg) {
//            DB::table('fruits')->insert([
//                'name' => $faker->fruitName,
//                'price' => $faker->numberBetween(100,900)
//            ]);
//        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fruits');
    }
};
