<x-guest-layout>
    <div class="min-h-screen bg-black text-white">
        <header class="p-6">
            <h1 class="text-2xl font-bold">Webb Labs</h1>
        </header>
        <main class="container mx-auto px-4 py-16">
            <div class="flex flex-col items-center text-center">
                <div class="relative w-full mb-8">
                    <img src="{{ asset('images/webb-labs-banner.png') }}"
                         alt="Webb Labs - Bridge to Infinite Possibilities"
                         class="w-full h-auto object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 class="text-4xl md:text-6xl font-bold text-white">Webb Labs</h2>
                    </div>
                </div>
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Your Bridge to Infinite Possibilities
                </h2>
                <p class="text-xl md:text-2xl mb-8 max-w-2xl">
                    We are the catalyst for visionaries and innovators. Webb Labs connects brilliant minds to the vast potential of the digital realm, transforming abstract concepts into tangible realities.
                </p>
                <p class="text-lg md:text-xl mb-8 max-w-2xl">
                    Are you ready to traverse the bridge from imagination to implementation? Let's turn your wildest dreams into groundbreaking digital solutions.
                </p>
                <a href="{{ route('register') }}" class="inline-flex items-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-md hover:bg-gray-200 transition duration-300">
                    Embark on Your Journey
                </a>
            </div>
        </main>
        <section class="container mx-auto px-4 py-16">
            <h3 class="text-2xl md:text-4xl font-bold mb-8 text-center">Why Choose Webb Labs?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h4 class="text-xl font-semibold mb-4">Global Network</h4>
                    <p>Connect with innovators, developers, and industry experts from around the world.</p>
                </div>
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h4 class="text-xl font-semibold mb-4">Rapid Prototyping</h4>
                    <p>Transform your ideas into working MVPs at unprecedented speeds.</p>
                </div>
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h4 class="text-xl font-semibold mb-4">Cutting-edge Tech</h4>
                    <p>Leverage the latest in web technologies to bring your vision to life.</p>
                </div>
            </div>
        </section>
    </div>
</x-guest-layout>
