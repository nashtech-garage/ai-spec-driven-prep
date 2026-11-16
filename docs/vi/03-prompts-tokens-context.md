# 3. Prompt, token và context

**Thời gian đọc dự kiến:** 6 phút

Prompt và context quyết định phần lớn điều model làm được.

## Thuật ngữ chính

- **Prompt:** yêu cầu hoặc thông tin gửi cho model.
- **Context:** mọi thứ model nhận cho request, gồm prompt, messages trước, instructions và file/snippet tool gửi.
- **Context window:** giới hạn text model xử lý trong một request, tính bằng token.

Model chỉ làm việc với context nhận được, không tự biết mọi file trên máy.

## So sánh hai prompt

> **Mơ hồ:** “Write a task management app.”

> **Rõ hơn:** “Design an add-task feature for students. The title cannot be empty. Data is stored only on the device; no accounts or sync yet. Give two examples I can check, and list the questions you still need answered.”

Prompt rõ nêu goal, limits và output hữu ích. Hãy đọc kết quả và bổ sung chi tiết thiếu.

## Mẫu prompt hữu ích

### Nêu role và goal

```text
You are a mobile developer helping a first-year student.
Explain what a React component is, with one short example.
```

### Hỏi steps trước code

```text
Before writing code, list the files you would change and the risks.
Wait for my approval.
```

### Nêu format output

```text
Format each test as:
Given: ...
When: ...
Then: ...
```

### Hỏi model tự tìm gap

```text
What information is missing from my request?
Which assumptions could be wrong?
```

## Template prompt đơn giản

```text
Goal: điều user cần đạt
Context: project, stack hoặc file cần xem
Constraints: điều không được đổi hoặc ngoài scope
Output: format muốn nhận, như list, plan hoặc code change
Check: cách biết kết quả đúng
```

## Thói quen thực tế

1. Bắt đầu bằng outcome, không phải implementation.
2. Chỉ đưa context liên quan; không dán password hay API key.
3. Nếu answer lệch, bắt đầu request mới, tập trung.
4. Hỏi assumptions trước khi chấp nhận plan.

Tiếp theo: [4. Kiểm chứng output của AI](/vi/04-verify-ai-output).
