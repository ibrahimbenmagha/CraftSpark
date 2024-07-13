<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\User; // Assurez-vous que le modèle User est correctement importé

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Ibrahim Benmagha',
                'email' => 'ibrahimbenmagha@gmail.com',
                'password' => Hash::make('password123'),
                'date_naissance' => '2001-05-12',
                'role' => 'admin',
            ],
            [
                'name' => 'Chaimaa Mahfoud',
                'email' => 'chaimaamahfoud@gmail.com',
                'password' => Hash::make('password123'),
                'date_naissance' => '2002-05-12',
                'role' => 'admin',
            ],
            [
                'name' => 'Amine Tajeddin',
                'email' => 'aminetajdine@gmail.com',
                'password' => Hash::make('password123'),
                'date_naissance' => '2003-05-12',
                'role' => 'admin',
            ],
        ]);
    }
}
