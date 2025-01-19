using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading.Tasks;

[Route("sse")]
public class SseController : Controller
{
    [HttpGet]
    public async Task<IActionResult> Stream()
    {
        Response.ContentType = "text/event-stream";

        for (int i = 0; i < 10; i++)
        {
            string message = $"data: Mensagem {i + 1}\n\n";
            byte[] messageBytes = Encoding.UTF8.GetBytes(message);

            await Response.Body.WriteAsync(messageBytes, 0, messageBytes.Length);
            await Response.Body.FlushAsync();

            await Task.Delay(1000);
        }

        while (true) { }
        return new EmptyResult();
    }
}
