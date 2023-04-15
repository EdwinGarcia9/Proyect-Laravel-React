<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TestRooms extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_index()
    {
    $this->get('/rooms')->assertStatus(200)->assertSeeText('Rooms Index');
    }
    public function test_store()
        {
            $data = [
                'name' => 'Habitación 1',
                'description' => 'Esta es una habitación muy acogedora',
                'capacity' => 2,
                'price' => 100.50,
            ];
            $response = $this->post('/room', $data);
            $this->assertDatabaseHas('rooms', [
                'name' => $data['name'],
                'description' => $data['description'],
                'capacity' => $data['capacity'],
                'price' => $data['price'],
            ]);
            $response->assertRedirect('/rooms');
        }

}
