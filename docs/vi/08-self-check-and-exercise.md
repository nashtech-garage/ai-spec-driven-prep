# 8. Tự kiểm tra và bài khởi động

Hãy thử trước workshop. Không chấm điểm; mục tiêu là nhận ra điều đã hiểu và điều cần hỏi.

## Phần A: Tự kiểm tra

<details>
<summary>1. AI có giống machine learning không?</summary>

**Không.** Machine learning là một cách xây AI; program dựa trên luật cũng có thể là AI nhưng không học từ data.

</details>

<details>
<summary>2. LLM làm gì từng bước?</summary>

**Nó dự đoán token tiếp theo** dựa trên text hiện có rồi lặp lại để tạo answer.

</details>

<details>
<summary>3. Câu trả lời tự tin có đảm bảo code đúng không?</summary>

**Không.** Đọc, chạy, test và đối chiếu docs chính thức.

</details>

<details>
<summary>4. Model tự đọc mọi file khi mở VS Code không?</summary>

**Không mặc định.** Nó dùng context và tool permissions được cấp.

</details>

<details>
<summary>5. App xây với AI có bắt buộc chatbot không?</summary>

**Không.** Dùng AI để xây app khác với thêm AI feature vào app.

</details>

<details>
<summary>6. Acceptance example hữu ích khi nào?</summary>

**Khi mô tả behavior có thể quan sát hoặc test**, như không có completed tasks thì clear không đổi gì.

</details>

<details>
<summary>7. Vì sao agent xin approval trước command?</summary>

**Vì command có thể đổi files, xóa data hoặc truy cập network.**

</details>

## Phần B: Bài khởi động (khoảng 15 phút)

Chọn feature **clear completed tasks** trong to-do app.

1. Viết user outcome.
2. Viết hai acceptance examples: normal và edge case.
3. Viết một non-goal, ví dụ “không có undo”.
4. Liệt kê hai câu hỏi hỏi product owner.

### Câu trả lời có thể có

- **Outcome:** user xóa tất cả completed tasks để list gọn.
- **Example 1:** hai completed và một active; clear thì chỉ active còn.
- **Example 2:** không completed; list giữ nguyên, không lỗi.
- **Non-goal:** không có undo.
- **Questions:** Có cần confirm? Task xóa có khôi phục được không?

## Phần C: Hỏi AI tool (tùy chọn)

```text
I want to add a "clear completed tasks" feature to a simple to-do app.
Before writing any code, ask me the questions you need answered, and list
the edge cases I should specify. Do not write code yet.
```

So sánh câu hỏi của tool với câu hỏi của bạn.

## Mang đến workshop

- Một câu hỏi về AI hoặc spec.
- Ví dụ AI answer sai, thiếu hoặc không rõ.
- Mobile stack và AI account đã chọn.
