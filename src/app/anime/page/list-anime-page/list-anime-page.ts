import { Component, ChangeDetectionStrategy, signal, input, computed, linkedSignal, inject } from '@angular/core';
import { ListAnime } from '../../components/list-anime/list-anime';
import { animeListResource, getAnimeGenres } from '../../helpers/resource';
import { AnimeListParams } from '../../types';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { form, submit } from '@angular/forms/signals';



@Component({
  selector: 'app-list-anime-page',
  imports: [ListAnime, RouterLink, DecimalPipe],
  templateUrl: './list-anime-page.html',
  styleUrl: './list-anime-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAnimePage {
  readonly q = input<string>();
  readonly page = input<string>();
  readonly genres = input<string>();
  private readonly router = inject(Router);
  private readonly params = computed<AnimeListParams>(() => ({
    q: this.q() ?? '',
    page: this.page() ?? '',
    genres: this.genres() ?? ''
  }))

  protected readonly resource = animeListResource(() => this.params());
  protected readonly genresResource = getAnimeGenres();

  protected readonly filterForm = form(linkedSignal(() => ({
    q: this.q() ?? '',
    // string from query parameter to array
    genres: this.genres() ? this.genres()!.split(',').map(Number) : []
  })));



  //---Genres----
  protected toggleGenreInForm(genreId: number, isChecked: boolean): void {
    const currentGenres = this.filterForm.genres().value();

    let newGenres: number[];
    if (isChecked) {
      newGenres = [...currentGenres, genreId];
    } else {
      newGenres = currentGenres.filter(id => id !== genreId);
    }
    this.filterForm.genres().value.set(newGenres);
  }

  protected onApplyFilter(): void {
    submit(this.filterForm, async (formValue) => {
      const v = formValue().value();

      const queryParams: any = {
        q: v.q || null,
        genres: v.genres.length > 0 ? v.genres.join(',') : null,
        page: null // เปลี่ยนฟิลเตอร์ใหม่ ต้องกลับไปหน้า 1
      };

      void this.router.navigate([], {
        queryParams: queryParams,
        queryParamsHandling: 'merge'
      });
    });
  }
  protected readonly isFilterExpanded = signal(false);
  protected readonly selectedGenreIds = computed(() => {
    const genresStr = this.genres();
    return genresStr ? genresStr.split(',').map(Number) : [];
  });
  protected toggleFilter(): void {
    this.isFilterExpanded.update(v => !v);
  }

  protected toggleGenre(genreId: number): void {
    const currentSelected = this.selectedGenreIds();
    let updatedGenres: number[];

    if (currentSelected.includes(genreId)) {
      updatedGenres = currentSelected.filter(id => id !== genreId);
    } else {
      updatedGenres = [...currentSelected, genreId];
    }

    const genresParam = updatedGenres.length > 0 ? updatedGenres.join(',') : null;

    this.router.navigate([], {
      queryParams: { genres: genresParam, page: null },
      queryParamsHandling: 'merge'
    });
  }
  //----------------



  protected readonly currentPage = computed(() => Number(this.page() ?? 1));

  protected readonly previousPage = computed(() => {
    if (this.resource.hasValue()) {
      const currentPage = this.resource.value().pagination.current_page;

      if (currentPage === 1) {
        return null;
      }

      return currentPage - 1;
    } else {
      return null;
    }
  });

  protected readonly nextPage = computed(() =>
    this.resource.hasValue() && this.resource.value().pagination.has_next_page
      ? this.resource.value().pagination.current_page + 1
      : null,
  );

}
