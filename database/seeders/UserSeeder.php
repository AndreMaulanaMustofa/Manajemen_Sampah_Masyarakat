<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Irsyad A. Panjaitan',
                'email' => 'irsyad@parsinta.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
                 'phone_number'=>'08123456789',
            ],
            [
                'name' => 'Sri A. Rahayu',
                'email' => 'ayu@parsinta.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
                'phone_number'=>'08123456789',
            ],
            [
                'name' => 'user',
                'email' => 'user@user.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
                'phone_number'=>'08123456789',
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
