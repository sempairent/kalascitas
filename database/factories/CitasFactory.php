<?php

namespace Database\Factories;
use App\Models\Citas;
use Illuminate\Database\Eloquent\Factories\Factory;


class CitasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $colors = ['gray','red','yellow','green','purple'];
        return [
            'name' => $this->faker->text(15),
            'paternal' => $this->faker->company,
            'maternal' => $this->faker->text(15),
            'fechacita' => $this->faker->date,
            'horacita' => $this->faker->time('H:i'),
            /*'color' => $this->faker->randomElement($colors)*/
        ];
    }
}
