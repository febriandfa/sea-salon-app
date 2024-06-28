<?php

namespace Database\Factories;

use App\Models\Branch;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reservation>
 */
class ReservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $serviceId = Service::where('member_only', 'N')->inRandomOrder()->first()->id;
        $branch = Branch::inRandomOrder()->first();

        $openTime = Carbon::parse($branch->open_time);
        $closeTime = Carbon::parse($branch->close_time);

        $randomTime = $this->generateRandomTimeBetween($openTime, $closeTime);

        $randomDate = $this->generateRandomDateBetween('-1 week', '+1 week');

        return [
            'name' => fake()->name(),
            'phone_number' => fake()->phoneNumber(),
            'service_id' => $serviceId,
            'branch_id' => $branch->id,
            'date' => $randomDate->format('Y-m-d'),
            'time' => $randomTime->format('H:i:s'),
        ];
    }

    private function generateRandomTimeBetween(Carbon $start, Carbon $end): Carbon
    {
        $randomTimestamp = rand($start->timestamp, $end->timestamp);
        return Carbon::createFromTimestamp($randomTimestamp);
    }

    private function generateRandomDateBetween(string $start, string $end): Carbon
    {
        $startDate = Carbon::parse($start);
        $endDate = Carbon::parse($end);
        $randomTimestamp = rand($startDate->timestamp, $endDate->timestamp);
        return Carbon::createFromTimestamp($randomTimestamp);
    }
}
