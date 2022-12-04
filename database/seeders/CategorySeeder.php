<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'Blimbing', 'slug' => str($name)->slug()],
            ['name' => $name = 'Kedungkandang', 'slug' => str($name)->slug()],
            ['name' => $name = 'Klojen', 'slug' => str($name)->slug()],
            ['name' => $name = 'Lowokwaru', 'slug' => str($name)->slug()],
            ['name' => $name = 'Sukun', 'slug' => str($name)->slug()],
        ])->each(fn ($q) => Category::create($q));
    }
}
