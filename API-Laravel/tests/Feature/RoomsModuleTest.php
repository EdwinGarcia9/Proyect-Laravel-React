<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RoomsModuleTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_index()
    {
        $this->get('/rooms')->assertStatus(200);
    }
    public function test_store()
    {
        $this->post('/rooms')->assertStatus(200);
    }
    public function test_update()
    {
        $this->put('/rooms')->assertStatus(200);
    }
    public function test_detroy()
    {
        $this->delete('/rooms')->assertStatus(200);
    }
    public function test_show()
    {
        $this->get('/rooms')->assertStatus(200);
    }
}

