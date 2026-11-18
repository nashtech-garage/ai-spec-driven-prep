# Bảng thuật ngữ

## Bốn thực hành nên tìm hiểu thêm

Bốn thuật ngữ này mô tả các lớp bao quanh model AI, từ một chỉ dẫn đơn lẻ đến một hệ thống lặp lại. Mỗi lớp xây dựng trên lớp trước, nên thuật ngữ sau không thay thế thuật ngữ trước. Dùng từ khóa tìm kiếm để đọc thêm.

| Thuật ngữ | Tập trung vào | Từ khóa tìm kiếm |
| --- | --- | --- |
| **Prompt engineering** | Viết chỉ dẫn rõ ràng, cụ thể (kèm định dạng hoặc ví dụ) cho một lần tương tác. | `prompt engineering guide` |
| **Context engineering** | Quyết định model nhìn thấy thông tin gì, và khi nào. | `context engineering AI agents` |
| **Harness engineering** | Xây môi trường quanh agent (test, tài liệu, quy tắc, tiêu chí hoàn thành) để kết quả của nó kiểm chứng được. | `harness engineering AI agents` |
| **Loop engineering** | Thiết kế một vòng lặp lặp lại, trong đó agent lập plan, hành động, kiểm tra kết quả và tiếp tục hướng tới mục tiêu, với ít sự can thiệp của người. | `loop engineering AI agents` |

## Tất cả thuật ngữ

| Thuật ngữ | Ý nghĩa |
| --- | --- |
| **Acceptance criteria** | Ví dụ hoặc điều kiện cho thấy feature đáp ứng requirements. |
| **AGENTS.md** | File Markdown trong repository, cung cấp cho coding agent các hướng dẫn của project như lệnh build và quy tắc code. |
| **Agent skill** | Thư mục chứa hướng dẫn và script tùy chọn; tool chỉ nạp khi tác vụ cần (ví dụ file `SKILL.md`). |
| **AI agent** | Model nằm trong vòng lặp cùng tools: lập plan, hành động, quan sát kết quả và lặp lại đến khi đạt goal hoặc cần bạn quyết định. |
| **AI (Artificial Intelligence)** | Lĩnh vực xây hệ thống làm việc thường cần phán đoán của người. |
| **AI observability** | Giám sát những gì AI feature đã làm: prompt, tài liệu truy xuất, tool calls, output, số token và độ trễ, thường ghi thành traces. |
| **Agent mode** | Mode AI assistant lập plan và làm nhiều bước trong permissions được cấp. |
| **Bounded first change** | Thay đổi đầu tiên nhỏ, giới hạn rõ ràng trên project đã có, kèm ví dụ nghiệm thu cụ thể. Dùng để thử workflow trước khi làm việc lớn hơn. |
| **Brownfield** | Project đã có code đang chạy và phải giữ được, khác với project mới (greenfield). |
| **Chunk** | Một đoạn của tài liệu (thường vài đoạn văn), được embed và lưu để truy xuất. |
| **Coding agent** | AI làm nhiều bước trong project bằng tools. |
| **Context** | Mọi thứ model nhận cho request. |
| **Context engineering** | Quyết định đưa gì vào context của model (instructions, file, text truy xuất, kết quả tool) và khi nào đưa. |
| **Context window** | Giới hạn text (token) model xử lý trong request. |
| **Converge** | Bước sau implementation, so sánh code với spec, plan và tasks, rồi thêm việc còn thiếu vào `tasks.md`. Không sửa code. |
| **Deep learning** | Machine learning dùng neural networks nhiều lớp. |
| **Embedding** | Danh sách số biểu diễn ý nghĩa của text; text có ý nghĩa giống nhau sẽ có vector gần nhau. |
| **Eval** | Bài kiểm tra lặp lại được cho hành vi AI, gồm tập đầu vào với kết quả mong đợi hoặc rubric chấm điểm. |
| **Fine-tuning** | Training thêm model bằng examples để đổi behavior/style. |
| **Function calling** | Tên khác của tool use: model trả về yêu cầu có cấu trúc để gọi hàm, và app của bạn chạy hàm đó. |
| **Generative AI** | AI tạo text, code, ảnh, audio hoặc video mới. |
| **Guardrail** | Lớp kiểm tra quanh model, như bộ lọc input/output, danh sách hành động được phép, hoặc yêu cầu người duyệt. |
| **Hallucination** | Output sai/không có căn cứ nhưng được nói rất tự tin. |
| **Harness engineering** | Xây môi trường quanh model (test, linter, tài liệu, tiêu chí hoàn thành rõ ràng) để agent thành công thường xuyên hơn và kết quả kiểm chứng được. |
| **Inference** | Dùng model đã train tạo output từ input. |
| **Knowledge cutoff** | Ngày sau đó model không có training data. |
| **Latency (độ trễ)** | Thời gian người dùng phải chờ phản hồi. Stream câu trả lời khi đang viết giúp cảm giác nhanh hơn. |
| **LLM (Large Language Model)** | Generative model train trên lượng text lớn, dùng cho chat/coding. |
| **LLM-as-a-judge** | Dùng một model để chấm output của model khác theo rubric. Hữu ích, nhưng cần kiểm tra lại ngẫu nhiên điểm số. |
| **Loop engineering** | Thiết kế vòng lặp lặp lại, trong đó agent lập plan, hành động, kiểm tra kết quả và tiếp tục hướng tới mục tiêu. Cần giới hạn chi phí và tránh đi lệch hướng. |
| **Machine learning (ML)** | Xây AI bằng cách học patterns từ data. |
| **MCP (Model Context Protocol)** | Chuẩn mở để kết nối ứng dụng AI với tools và data bên ngoài thông qua MCP servers. |
| **Model** | Hàm toán học có parameters điều chỉnh được. |
| **Multimodal model** | Model nhận nhiều loại đầu vào hơn text, như ảnh, audio hoặc video. |
| **Neural network** | Model gồm nhiều lớp các đơn vị liên kết. |
| **Next-token prediction** | Tác vụ LLM dự đoán token tiếp theo có khả năng nhất. |
| **Non-goal** | Điều feature cố ý không bao gồm. |
| **On-device AI** | AI chạy trên thiết bị của người dùng thay vì cloud. Có thể dùng offline, nhưng model nhỏ hơn. |
| **Parameter (weight)** | Số điều chỉnh được bên trong model. |
| **Plan (technical plan)** | Mô tả cách build feature, code, tools, storage và risks. |
| **Pre-training** | Giai đoạn đầu học patterns từ data rất lớn. |
| **Predictive AI** | AI cho phán đoán, nhãn hoặc số về data hiện có. |
| **Prompt** | Request hoặc thông tin gửi cho model. |
| **Prompt engineering** | Viết chỉ dẫn rõ ràng, cụ thể cho model, kèm quy tắc định dạng hoặc ví dụ, để có một phản hồi tốt hơn. |
| **Prompt injection** | Tấn công trong đó văn bản nằm trong dữ liệu (web page, email, issue) cố ghi đè chỉ dẫn của AI. |
| **Quality gate** | Kiểm tra tùy chọn trước implementation, như clarify, checklist hoặc analyze, để bắt requirements chưa rõ hoặc mâu thuẫn. |
| **RAG (Retrieval-Augmented Generation)** | Tìm tài liệu liên quan tại thời điểm hỏi và thêm vào prompt, để model trả lời dựa trên chúng. |
| **Reasoning model** | Model được train để dành thêm token suy nghĩ trước khi trả lời. Thường tốt hơn với bài nhiều bước nhưng chậm và tốn hơn. |
| **Responsible AI** | Thực hành về quyền riêng tư, công bằng, minh bạch, an toàn và bản quyền khi đưa AI vào sản phẩm. |
| **Semantic search** | Tìm kiếm theo ý nghĩa, thường dùng embeddings, thay vì khớp từ khóa chính xác. |
| **Small language model (SLM)** | Language model có ít parameters hơn, đủ nhỏ để chạy trên điện thoại hoặc laptop. |
| **Specification (spec)** | Document mô tả điều cần build, scope, rules và acceptance criteria. |
| **Spec Kit** | Toolkit open-source của GitHub cho spec-driven workflow. |
| **Spec-driven development** | Workflow trong đó specification, plan và tasks được viết và review trước khi AI tool viết code. |
| **Structured output** | Output của model bị ràng buộc theo schema, như JSON, để code parse đáng tin cậy. |
| **Supervised learning** | ML từ examples có đáp án đúng (labels). |
| **Token** | Mảnh text model đọc/viết, không luôn là một từ. |
| **Token cost** | Chi phí hoặc quota dùng cho input và output token. Prompt dài và text truy xuất dài tốn hơn. |
| **Tool use** | Agent gọi capability ngoài như đọc file hoặc chạy command. |
| **Training** | Model điều chỉnh parameters bằng data trước khi dùng. |
| **Trace** | Bản ghi từng bước của một request AI (prompt, tool calls, text truy xuất, output), dùng để debug. |
| **Vector database** | Database lưu embeddings và tìm nhanh các vector gần nhất với truy vấn, ví dụ Chroma, pgvector hoặc Qdrant. |
