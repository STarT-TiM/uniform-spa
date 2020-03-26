<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'code' => 'FIRST',
            'name' => 'áo cổ tròn dáng suông',
            'price' => '240',
            'description' => 'áo mặc thoải mái, có thể kết hợp với nhiều phong cách khác nhau',
            'features' => 'áo có độ đàn hồi tốt, thấm hút mồ hôi',
            'fabric' => 'cotton 95%',
            'sizes' => 'S;M;L',
            'colors' => 'đen; trắng; xám; đỏ; vàng; cam',
            'quantity' => '99',
            'type' => '1',
            'image' => 'upload/products/jpg/400x400/HAF280_1_WHT.jpg',
            'map_size' => 'L:55 - 60kg; M:47 - 54kg; S:<47kg',

        ]);

        DB::table('products')->insert([
            'code' => 'SECOND',
            'name' => 'áo sơ mi nam',
            'price' => '300',
            'description' => 'áo sơ mi đơn giản mặc trong mọi hoàn cảnh',
            'features' => 'tay áo được thiết kế đặc biệt, giống tay áo sơ mi Song Joong Ki mặc trong đám cưới',
            'fabric' => 'cotton 100%',
            'sizes' => 'S;M;L',
            'colors' => 'đen; trắng',
            'quantity' => '876',
            'image' => 'upload/products/jpg/400x400/AA2007_1_WHT.jpg',
            'type' => '2',
            'map_size' => 'L:60-70kg; M:50-59kg; S:<50kg'

        ]);

    }
}

