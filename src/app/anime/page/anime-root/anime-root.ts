import { Component, ChangeDetectionStrategy, linkedSignal, signal, inject } from '@angular/core';
import { disabled, form } from '@angular/forms/signals';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-anime-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './anime-root.html',
  styleUrl: './anime-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeRoot {
  private readonly router = inject(Router);

  protected readonly searchQuery = signal<string>('');

  protected onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery.set(inputElement.value);
  }

  protected onGlobalSearch(): void {
    const q = this.searchQuery().trim();

    this.router.navigate(['/anime/list'], {
      queryParams: q ? { q } : {},
    })
  }

  protected clearSearch(): void {
    this.router.navigate(['/anime/list'], {
      queryParams: { q: '' },
    })
    this.onGlobalSearch()
  }
}
