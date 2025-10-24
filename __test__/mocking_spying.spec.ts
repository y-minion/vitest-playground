import { expect, test, vi } from "vitest";

test("fn()알아보기", () => {
  const mockFn = vi.fn(); //가짜함수_mock함수 생성

  expect(mockFn()).toBeUndefined(); // -> 기본적으로 목함수의 반환값은 undefined!
});

test("mockReturnValue()", () => {
  const mockFn = vi.fn();
  mockFn.mockReturnValue("저는 mock 함수에요");
  expect(mockFn()).toBe("저는 mock 함수에요");
});

test("mockResolvedValue()", async () => {
  const mockFn = vi.fn();
  mockFn.mockResolvedValue("비동기로 값을 반환합니다.");
  //   expect(mockFn()).toBe("비동기로 값을 반환합니다."); -> Promise를 반환하므로 테스트는 통과하지 못한다.
  expect(await mockFn()).toBe("비동기로 값을 반환합니다.");
});

test("mockImplementation()", () => {
  const mockFn = vi.fn();
  mockFn.mockImplementation((a) => {
    return a + 10;
  });

  expect(mockFn(1)).toBe(11);
});

test("toHaveBeenCalled()", () => {
  const mockFn = vi.fn();
  mockFn();
  mockFn(1);
  mockFn("a");
  mockFn([1, 2], { a: "b" });

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(4);
  expect(mockFn).toHaveBeenCalledWith("a");
  expect(mockFn).toHaveBeenCalledWith([1, 2], { a: "b" });
});
