<script lang="ts">
    import { useChat } from '@ai-sdk/svelte';

    const { input, handleSubmit, messages, data, error, metadata, isLoading } = useChat();
</script>

<main class="container mx-auto p-4 bg-gray-50 shadow-lg rounded-lg">
    <!-- Mensagens -->
    <ul class="h-[50vh] overflow-y-auto bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
        {#each $messages as message}
            <li
                class="mb-2 p-2 rounded-lg 
                {message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}"
            >
                <strong>{message.role}:</strong> {message.content}
            </li>
        {/each}
    </ul>

    <!-- Formulário -->
    <form class="mt-4 flex items-center space-x-2" on:submit={handleSubmit}>
        <input
            class="flex-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            bind:value={$input}
            placeholder="Type your message..."
        />
        <button
            class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            type="submit"
        >
            Send
        </button>
    </form>

    <!-- Dados -->
    <div class="mt-4">
        <h2 class="text-lg font-semibold text-gray-800">Data</h2>
        <pre class="p-4 bg-gray-100 border border-gray-300 rounded-lg text-sm overflow-x-auto">
{JSON.stringify($data, null, 2)}
        </pre>
    </div>

    <!-- Erros -->
    <div class="mt-4">
        <h2 class="text-lg font-semibold text-gray-800">Error</h2>
        <pre class="p-4 bg-red-100 border border-red-300 rounded-lg text-sm overflow-x-auto text-red-800">
{JSON.stringify($error, null, 2)}
        </pre>
    </div>
</main>
